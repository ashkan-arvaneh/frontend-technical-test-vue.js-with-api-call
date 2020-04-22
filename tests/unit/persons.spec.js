// import { shallowMount } from "@vue/test-utils";


import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import PersonList from '@/components/person-list'
import personsModule from '@/store/modules/personsModule'
const localVue = createLocalVue()

localVue.use(Vuex)

describe('Component', () => {
  let actions
  let store
  beforeEach(() => {
    actions = {
      GET_LIST: jest.fn(),
      PASS_SELECTED_PERSON: jest.fn(),

    }
    personsModule.actions = actions
    personsModule.state = {
      data: { "page": 2, "per_page": 6, "total": 12, "total_pages": 2, "data": [{ "id": 7, "email": "michael.lawson@reqres.in", "first_name": "Michael", "last_name": "Lawson", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg" }, { "id": 8, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg" }, { "id": 9, "email": "tobias.funke@reqres.in", "first_name": "Tobias", "last_name": "Funke", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg" }, { "id": 10, "email": "byron.fields@reqres.in", "first_name": "Byron", "last_name": "Fields", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg" }, { "id": 11, "email": "george.edwards@reqres.in", "first_name": "George", "last_name": "Edwards", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg" }, { "id": 12, "email": "rachel.howell@reqres.in", "first_name": "Rachel", "last_name": "Howell", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg" }], "ad": { "company": "StatusCode Weekly", "url": "http://statuscode.org/", "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things." } },
      totalItems: 7
    }
    store = new Vuex.Store({
      modules: {
        personsModule
      }
    })

  })
  test('rotation is correct', done => {
    const wrapper = shallowMount(PersonList, { store, localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()

    expect(wrapper.vm.itemStyles(0)).toStrictEqual({})
    setTimeout(() => {
      expect(wrapper.vm.itemStyles(0)).toStrictEqual({
        transition: "all 700ms ease 0s",
        backgroundColor: wrapper.vm.colourGenerator[0],
        transform: "rotate(-39deg)"
      })
      done()
    }, 1000)

  })
  test('rotation is correct after click', done => {
    const wrapper = shallowMount(PersonList, { store, localVue })
    setTimeout(() => {
      wrapper.vm.pickProfile(1)
      expect(wrapper.vm.itemStyles(1)).toStrictEqual({
        transition: "all 700ms ease 0s",
        backgroundColor: wrapper.vm.colourGenerator[1],
        transform: "rotate(0deg)"
      })
      done()
    }, 1000)

  })
})