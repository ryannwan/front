import request from '@/utils/request'

export function uploadimage(data) {
  return request({
    url: '/image',
    method: 'post',
    data
  })
}

