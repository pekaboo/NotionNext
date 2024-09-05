import { isBrowser } from '@/lib/utils'
import { useEffect, useState } from 'react'
import Image from 'next/image'

/**
 * SwipeImage组件
 * 水平方向，定时滚动的banner
 * @param {*} param0
 * @returns
 */
export function SwipeImage({ items }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    console.log('SwipeImage组件接收到的items数据:', items)
  }, [items])

  const handleClick = item => {
    if (isBrowser) {
      window.open(item?.url)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [items.length])

  console.log('当前活动索引:', activeIndex)

  return (
    <div className='max-w-[86rem] w-full mx-auto flex h-40 mb-4 px-5 font-bold'>
      <div className='animate__animated animate__fadeIn animate__fast group cursor-pointer bg-white dark:bg-[#1e1e1e] dark:text-white hover:border-indigo-600 dark:hover:border-yellow-600 border dark:border-gray-700 duration-200 hover:shadow-md transition-all rounded-xl w-full h-full flex items-center justify-between '>
        <div className='relative mx-auto max-w-[86rem] w-full h-40 overflow-hidden rounded-lg shadow-lg'>
          <div 
            className='flex h-full transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {items.map((item, index) => {
              console.log('渲染项目:', item)
              return (
                <div
                  key={index}
                  className='relative flex-shrink-0 w-full h-full'
                  onClick={() => handleClick(item)}
                >
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    layout="fill" 
                    objectFit="cover"
                    className='cursor-pointer'
                  />
                  <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent'>
                    <h3 className="mb-2 text-lg font-bold text-white truncate">{item.title}</h3>
                    {item.subtitle && <p className="text-sm text-gray-200 truncate">{item.subtitle}</p>}
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className='absolute left-0 right-0 flex justify-center bottom-4'>
            {items.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 mx-1 rounded-full ${
                  index === activeIndex ? 'bg-white' : 'bg-gray-400'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwipeImage