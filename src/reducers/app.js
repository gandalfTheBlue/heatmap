import { handleActions } from 'redux-actions'
import {
  APP_CLOSE_LOADING,
  APP_OAUTH_USER,
  APP_SHOW_LOADING,
  GET_CATEGORIES,
} from 'src/actions/app'

const initState = {
  loading: false,
  user: null,
  categories: [],
  treeCategories: [],
}

const app = handleActions(
  {
    [APP_SHOW_LOADING]: (state) => {
      return {
        ...state,
        loading: true,
      }
    },
    [APP_CLOSE_LOADING]: (state) => {
      return {
        ...state,
        loading: false,
      }
    },
    [APP_OAUTH_USER]: (state, { payload }) => {
      return {
        ...state,
        user: payload,
      }
    },
    [GET_CATEGORIES]: (state, { payload }) => {
      return {
        ...state,
        categories: payload.data,
        treeCategories: listToTree(payload.data),
      }
    },
  },
  initState
)

export default app

const listToTree = (list) => {
  const rootId = 1
  let map = {},
    node,
    roots = [],
    i

  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i]
    node.level = node.hid.split(':').length - 2
    node.value = node.id
    node.label = node.name
    if (node.pid !== rootId) {
      if (!list[map[node.pid]].children) {
        list[map[node.pid]].children = []
      }
      node.parent = list[map[node.pid]].name
      list[map[node.pid]].children.push(node)
    } else {
      roots.push(node)
    }
  }
  return roots
}
