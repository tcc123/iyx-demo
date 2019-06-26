/**
 * 本文件的方法会注入到 Vue.prototype中
 */
import axios from 'axios'

export function axiosHttp (vue, method, path, params) {
  let promise = new Promise((resolve, reject) => {
    let headersInfo, isNeedToken
    var accessToken = vue.$cookie.get('accessToken')
    // console.log(accessToken)
    if (process.env.NODE_ENV === 'mock' || path.toString().indexOf('resup.aspx') !== -1) {
      if (path.toString().indexOf('mockapi') !== -1) {
        headersInfo = {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      } else {
        headersInfo = {
          'Content-Type': 'application/json'
        }
      }
      isNeedToken = false
    } else {
      headersInfo = {
        Authorization: 'Bearer ' + accessToken
      }
      isNeedToken = true
    }
    if (!isNeedToken || accessToken) {
      // console.log('hastoken');
      axios({
        method: method,
        url: path,
        data: params,
        headers: headersInfo,
        timeout: 100000
      })
        .then(response => {
          if (response.status === 401) {
            vue.$cookie.delete('accessToken')
            window.location.href = vue.$apiRoot.usersitePath + '/user/dologin?returnurl=' + encodeURIComponent(window.location.href)
          } else if (response.status === 200) {
            if (response.data.Code === 1000) {
              vue.$cookie.delete('accessToken')
              window.location.href = vue.$apiRoot.usersitePath + '/user/dologin?returnurl=' + encodeURIComponent(window.location.href)
            } else if (response.data.Code === 1001) {
              // window.location.href = '/union/applymerchant'
              vue.$router.push({ path: '/union/applymerchant' })
            } else {
              resolve(response.data)
            }
          }
        })
        .catch(response => {
          // console.log(response);
          if (response.toString().indexOf('timeout') !== -1) {
            // mui.alert('', '请求超时，请稍后重试');
            console.log('超时')
          } else {
            reject(response)
          }
        })
    } else if (isNeedToken && !accessToken) {
      console.log('noToken')
      vue.$cookie.delete('accessToken')
      window.location.href = vue.$apiRoot.usersitePath + '/user/dologin?returnurl=' + encodeURIComponent(window.location.href)
    }
  })
  return promise
}

export function axiosGet (vue, path, params) {
  let promise = new Promise((resolve, reject) => {
    let headersInfo, isNeedToken
    var accessToken = vue.$cookie.get('accessToken')
    // console.log(accessToken)
    if (process.env.NODE_ENV === 'mock' || path.toString().indexOf('resup.aspx') !== -1) {
      if (path.toString().indexOf('mockapi') !== -1) {
        headersInfo = {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      } else {
        headersInfo = {
          'Content-Type': 'application/json'
        }
      }
      isNeedToken = false
    } else {
      headersInfo = {
        Authorization: 'Bearer ' + accessToken
      }
      isNeedToken = true
    }

    if (!isNeedToken || accessToken) {
      // console.log('hastoken');
      axios.get(path, {
        params: params,
        headers: headersInfo,
        timeout: 100000
      })
        .then(response => {
          if (response.status === 401) {
            vue.$cookie.delete('accessToken')
            window.location.href = vue.$apiRoot.usersitePath + '/user/dologin?returnurl=' + encodeURIComponent(window.location.href)
          } else if (response.status === 200) {
            if (response.data.Code === 1000) {
              vue.$cookie.delete('accessToken')
              window.location.href = vue.$apiRoot.usersitePath + '/user/dologin?returnurl=' + encodeURIComponent(window.location.href)
            } else if (response.data.Code === 1001) {
              // window.location.href = '/union/applymerchant'
              vue.$router.push({ path: '/union/applymerchant' })
            } else {
              resolve(response.data)
            }
          }
        })
        .catch(response => {
          // console.log(response);
          if (response.toString().indexOf('timeout') !== -1) {
            // mui.alert('', '请求超时，请稍后重试');
            console.log('超时')
          } else {
            reject(response)
          }
        })
    } else if (isNeedToken && !accessToken) {
      console.log('noToken')
      vue.$cookie.delete('accessToken')
      window.location.href = vue.$apiRoot.usersitePath + '/user/dologin?returnurl=' + encodeURIComponent(window.location.href)
    }
  })
  return promise
}

export function axiosGetNoAuth (vue, path, params) {
  let promise = new Promise((resolve, reject) => {
    axios.get(path, {
      params: params,
      timeout: 100000
    })
      .then(response => {
        if (response.status === 401) {
          window.location.href = vue.$apiRoot.usersitePath + '/user/dologin?returnurl=' + encodeURIComponent(window.location.href)
        } else if (response.status === 200) {
          if (response.data.Code === 1000) {
            vue.$cookie.delete('accessToken')
            window.location.href = vue.$apiRoot.usersitePath + '/user/dologin?returnurl=' + encodeURIComponent(window.location.href)
          } else if (response.data.Code === 1001) {
            vue.$router.push({ path: '/union/applymerchant' })
            // window.location.href = '/union/applymerchant'
          } else {
            resolve(response.data)
          }
        }
      })
      .catch(response => {
      // console.log(response);
        if (response.toString().indexOf('timeout') !== -1) {
        // mui.alert('', '请求超时，请稍后重试');
          console.log('超时')
        } else {
          reject(response)
        }
      })
  })
  return promise
}
export function ajax (Vue, path, params, methods = 'post') {
  // debugger;
  // params.client_id = process.env.globalParams.client_id;
  let promise
  if (process.env.NODE_ENV === 'mock') {
    promise = new Promise((resolve, reject) => {
      let mockData = require('./../mockData/Index').default
      let res = mockData[path]
      resolve(res)
    })
  } else {
    promise = new Promise((resolve, reject) => {
      let headersInfo, isNeedToken
      var accessToken = window.localStorage.getItem('accessToken')
      if (process.env.NODE_ENV === 'mock') {
        isNeedToken = false
      } else {
        headersInfo = {
          Authorization: 'Bearer ' + accessToken
        }
        isNeedToken = true
      // isNeedToken = false;
      }
      if (!isNeedToken || accessToken) {
        let axiosHandle
        if (methods.toLowerCase() === 'get') {
          axiosHandle = Vue.axios.get(path, {
            headers: headersInfo,
            timeout: 50000,
            params: params || {}
          })
        } else {
          axiosHandle = Vue.axios[methods](path, params, {
            headers: headersInfo,
            timeout: 50000
          })
        }

        axiosHandle.then(response => {
        // console.log('post 返回');
        // console.log(response);
          if (response.status === 401) {
            Vue.$router.push({
              path: '/user/login'
            })
          } else if (response.status === 200) {
            if (response.data.Code === 1000) {
              Vue.$router.push({
                path: '/user/login'
              })
            } else {
              resolve(response.data)
            }
          } else {
            console.log('错误:' + response.status)
          }
        }).catch(response => {
          if (response.toString().indexOf('timeout') !== -1) {
            console.log('请求超时，请稍后重试')
          } else {
            if (response.toString().toLowerCase().indexOf('network') !== -1) { // 网络异常
              console.log('网络异常：' + response)
            } else {
              reject(response)
            }
          }
        })
      } else if (isNeedToken && !(accessToken)) {
        Vue.$router.push({
          path: '/user/login'
        })
      }
    })
  }

  return promise
}
