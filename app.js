/**
 * Copyright 2018 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || process.env.VCAP_APP_PORT || 8081

app.use('/', express.static(__dirname))

app.listen(port, () => {
  console.log(`Server starting on http://localhost:${port}`)
})

// require('metrics-tracker-client').track()

