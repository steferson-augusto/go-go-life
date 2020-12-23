import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, RefreshControl } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import api from '../../api'
import { AplicationState } from '../../store'
import { Page, Post } from '../../store/ducks/pages/types'
import { PostProps as DataProps } from '../../components/Post'
import PostComponent from '../../components/Post'
import ImageComponent from '../../components/Image'
import Loading from '../../components/Loading'
import Empty from '../../components/Empty'
import Error from '../../components/Error'

type ComponentTypes = 'post' | 'image'

const hasIcon = ['messages', 'news', 'schedules', 'services']

const component = {
  post: PostComponent,
  image: ImageComponent
}

const Main: React.FC = () => {
  const route = useRoute()
  const { url, content, icon } = useSelector<AplicationState, Page>(
    ({ pages }) => pages.data.find(page => page.title === route.name) as Page
  ) || { title: '', url: '', content: [] }
  const [data, setData] = useState<DataProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const getData = useCallback(async () => {
    try {
      const response = await api.get<Post[]>(`/posts?url=${url}`)
      const posts: DataProps[] = content.map(item => {
        const dataPost =
          response?.data
            ?.filter(
              post =>
                item.properties.categories.includes(post.category) && post.title
            )
            ?.map(item => item.title) || []
        return {
          type: item.type,
          title: item.title,
          data: dataPost,
          icon: hasIcon.includes(item.properties.categories[0])
            ? icon
            : undefined
        }
      })
      setData(posts)
      setError(false)
    } catch (error) {
      setError(true)
    }
    setRefreshing(false)
    setLoading(false)
  }, [])

  useEffect(() => {
    setLoading(true)

    getData()
  }, [])

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    getData()
  }, [])

  if (error) return <Error />
  if (loading) return <Loading />
  if (data.length <= 0) return <Empty />

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {data?.map((post, index) => {
          const Component = component[post.type as ComponentTypes]
          return <Component key={`${index}`} {...post} />
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Main
