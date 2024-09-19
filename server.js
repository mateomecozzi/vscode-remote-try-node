/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');
const f = require('./modules/sum')


// Constants
const PORT = 3000;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
	const suma = f.add(2+4)
	res.send({Tittle:'Hello remote world!\n'});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);