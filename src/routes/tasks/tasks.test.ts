import {describe, expect, expectTypeOf, it} from 'vitest'
import router from './tasks.index'
import { createTestApp } from '@/lib/create-app'

describe('task list ', () => {
  it('responds with an array', async () => {
    const testRouter  = createTestApp(router)
    const response  = await testRouter.request('/tasks')
    const result = await response.json()
    console.log(result)
    // @ts-expect-error
    expectTypeOf(result).toBeArray()
  })
})