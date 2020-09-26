import { createTestClient } from 'apollo-server-testing'
import { serial as test } from 'ava'
import { server } from 'src'

import { GET_DOCTORS } from 'src/graphql/doctor/specs/gqls'

test('should get doctors', async (t) => {
  const { query } = createTestClient(server)
  const response = await query({ query: GET_DOCTORS })

  t.is(response.errors, undefined)
  t.not(response.data, null)
})
