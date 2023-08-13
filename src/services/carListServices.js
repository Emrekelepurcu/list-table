import httpHelper from '@utils/httpHelper'

const getCarList = async () => {
  const result = await httpHelper.makeGetRequest({
    url: '/car-list'
  })
  return result
}

export { getCarList }
