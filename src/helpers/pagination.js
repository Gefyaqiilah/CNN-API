const pagination = (limit, page, totalData, endPoint, order) => {
  const totalPage = Math.ceil(totalData/limit)
  const prevUrl = `${process.env.BASE_URL}/api/v1/${endpoint}?page=${page-1}&limit=${limit}`
  const nextUrl = `${process.env.BASE_URL}/api/v1/${endpoint}?page=${page+1}&limit=${limit}`
  if (order !== false) {
    prevUrl += `order=${order}`
    nextUrl += `order=${order}`
  } 
  const setPagination = {
    totalDatam, totalPage,
    currentPage: page,
    perPage: limit,
    prevPage: page > 1 ? prevUrl : null,
    nextPage: page < totalPage ? nextUrl : null
  }
  return setPagination
}
module.exports = pagination