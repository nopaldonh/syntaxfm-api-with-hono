import {describe, expect, expectTypeOf, it} from 'vitest'
import router from './tasks.index'
import createApp, { createTestApp } from '@/lib/create-app'
import { testClient } from 'hono/testing'

describe('task list ', () => {
  it('responds with an array', async () => {
    const testRouter  = createTestApp(router)
    const response  = await testRouter.request('/tasks')
    const result = await response.json()
    // @ts-expect-error
    expectTypeOf(result).toBeArray()
  })

  it('responds with an array again', async () => {
    const client = testClient(createApp().route('/',router))
    const response  = await client.tasks.$get()
    const json = await response.json()
    expectTypeOf(json).toBeArray()
  })

  it('validates the id param', async () => {
    const client = testClient(createApp().route('/',router))
    const response  = await client.tasks[":id"].$get({
      param: {
        id: 'wat'
      }
    })
    expect(response.status).toBe(422)
  })

  it('validates the body when creating', async () => {
    const client = testClient(createApp().route('/',router))
    const response  = await client.tasks.$post({
    // @ts-expect-error
      json: {
        name: 'Learn Vitest',
      }
    })
    expect(response.status).toBe(422)
  })
})