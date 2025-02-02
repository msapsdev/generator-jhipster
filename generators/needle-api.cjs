/**
 * Copyright 2013-2022 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Base = require('./needle-base.cjs');
const Client = require('./client/needle-api/needle-client.cjs');
const ClientAngular = require('./client/needle-api/needle-client-angular.cjs');
const ClientReact = require('./client/needle-api/needle-client-react.cjs');
const ClientVue = require('./client/needle-api/needle-client-vue.cjs');
const ClientWebpack = require('./client/needle-api/needle-client-webpack.cjs');
const ClientI18n = require('./client/needle-api/needle-client-i18n.cjs');
const ServerMaven = require('./server/needle-api/needle-server-maven.cjs');
const ServerGradle = require('./server/needle-api/needle-server-gradle.cjs');
const ServerCache = require('./server/needle-api/needle-server-cache.cjs');
const ServerLiquibase = require('./server/needle-api/needle-server-liquibase.cjs');
const ServerLog = require('./server/needle-api/needle-server-logback-spring.cjs');

module.exports = class NeedleApi {
  constructor(generator) {
    this.base = new Base(generator);
    this.client = new Client(generator);
    this.clientAngular = new ClientAngular(generator);
    this.clientReact = new ClientReact(generator);
    this.clientVue = new ClientVue(generator);
    this.clientWebpack = new ClientWebpack(generator);
    this.clientI18n = new ClientI18n(generator);
    this.serverMaven = new ServerMaven(generator);
    this.serverCache = new ServerCache(generator);
    this.serverLiquibase = new ServerLiquibase(generator);
    this.serverGradle = new ServerGradle(generator);
    this.serverLog = new ServerLog(generator);
  }
};
