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
import applicationOptions from './application-options';

const Options: any = {
  SKIP_CLIENT: applicationOptions.OptionNames.SKIP_CLIENT,
  SKIP_SERVER: applicationOptions.OptionNames.SKIP_SERVER,
  NO_FLUENT_METHOD: 'noFluentMethod',
  READ_ONLY: 'readOnly',
  FILTER: 'filter',
  EMBEDDED: 'embedded',
};

export const SKIP_CLIENT = Options.SKIP_CLIENT;
export const SKIP_SERVER = Options.SKIP_SERVER;
export const NO_FLUENT_METHOD = Options.NO_FLUENT_METHOD;
export const READ_ONLY = Options.READ_ONLY;
export const FILTER = Options.FILTER;
export const EMBEDDED = Options.EMBEDDED;

const optionNames = Object.values(Options);

Options.forEach = passedFunction => {
  if (!passedFunction) {
    throw new Error('A function has to be passed to loop over the unary options.');
  }
  optionNames.forEach(optionName => {
    passedFunction(optionName);
  });
};

Options.exists = option => Object.values(Options).includes(option);

export default Options;
