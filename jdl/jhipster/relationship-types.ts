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

import _ from 'lodash';

const RelationshipTypes: any = {
  ONE_TO_ONE: 'OneToOne',
  ONE_TO_MANY: 'OneToMany',
  MANY_TO_ONE: 'ManyToOne',
  MANY_TO_MANY: 'ManyToMany',
};

export const ONE_TO_ONE = RelationshipTypes.ONE_TO_ONE;
export const ONE_TO_MANY = RelationshipTypes.ONE_TO_MANY;
export const MANY_TO_ONE = RelationshipTypes.MANY_TO_ONE;
export const MANY_TO_MANY = RelationshipTypes.MANY_TO_MANY;

RelationshipTypes.exists = relationship => Object.values(RelationshipTypes).includes(_.upperFirst(_.camelCase(relationship)));

export default RelationshipTypes;
