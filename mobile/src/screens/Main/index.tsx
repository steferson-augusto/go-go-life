import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import api from '../../api'
import { AplicationState } from '../../store'
import { Page, Post } from '../../store/ducks/pages/types'
import { PostProps } from '../../components/Post'
import PostComponent from '../../components/Post'
import Loading from '../../components/Loading'
import Empty from '../../components/Empty'

const hasIcon = ['messages', 'news', 'schedules', 'services']

const Main: React.FC = () => {
  const route = useRoute()
  const { title, url, content, icon } = useSelector<AplicationState, Page>(
    ({ pages }) => pages.data.find(page => page.title === route.name) as Page
  ) || { title: '', url: '', content: [] }
  const [data, setData] = useState<PostProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      try {
        const response = await api.get<Post[]>(`/posts?url=${url}`)

        const posts: PostProps[] = content.map(item => {
          const dataPost =
            response?.data
              ?.filter(post =>
                item.properties.categories.includes(post.category)
              )
              ?.map(item => item.title) || []
          return {
            title: item.title,
            data: dataPost,
            icon: hasIcon.includes(item.properties.categories[0])
              ? icon
              : undefined
          }
        })
        setData(posts)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    getData()
  }, [])

  if (loading) return <Loading />

  if (data.length <= 0) return <Empty />

  return (
    <SafeAreaView>
      {data?.map((post, index) => (
        <PostComponent key={`${index}`} {...post} />
      ))}
    </SafeAreaView>
  )
}

export default Main
