const response = (res, result, status, err) => {
  const printResponse = {
    statusCode: status.code,
    status: status.status,
    data: result,
    error: err || null
  }
  return res.status(printResponse.statusCode).json(printResponse)
}

module.exports = response