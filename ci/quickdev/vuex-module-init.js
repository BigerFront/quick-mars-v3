const fs = require('fs-extra');
const chalk = require('chalk');
const _ = require('lodash');

const { R, src } = require('../paths');
const VUEX_BASE_DIR = 'store';
const MOD_NAME = process.env.VUEX_MOD_NAME;

const FOPTS = {
  encoding: 'utf8',
};

main();

function main() {
  if (!MOD_NAME) {
    console.log(
      chalk.redBright(`Please set VUEX_MOD_NAME arg in process.env.`),
    );
    process.exit(1);
  }

  const VUEX_MODULE_PATH = R(src, VUEX_BASE_DIR, 'modules', MOD_NAME);
  if (fs.existsSync(VUEX_MODULE_PATH)) {
    console.log(
      chalk.redBright(`${VUEX_MODULE_PATH} exists. can not overirde.`),
    );
    process.exit(1);
  }
  fs.ensureDir(VUEX_MODULE_PATH);

  createActions(VUEX_MODULE_PATH);
  createGetters(VUEX_MODULE_PATH);

  createMutations(VUEX_MODULE_PATH);
  createIndex(VUEX_MODULE_PATH);
  createModuleMarkdown(VUEX_MODULE_PATH);
}

function createModuleMarkdown(modPath) {
  const name = _.capitalize(_.camelCase(MOD_NAME));
  console.log('>>>>>>>>>>>>', MOD_NAME, name);
  const MARKDOWN_TPL = `# ${name}\n` + `> Vuex Module : ${name}`;
  fs.outputFileSync(R(modPath, '.mod.md'), MARKDOWN_TPL, FOPTS);
}

function createActions(modPath) {
  const ACTION_TPL = `import * as types from './mutation-types';\n`;
  const ACTION_INIT =
    '\n' +
    `export const initModState = async ({ commit }, ${MOD_NAME.toLowerCase()}State = {} ) => {\n\t\/\/ init module state \n};\n`;
  fs.outputFileSync(R(modPath, 'actions.js'), ACTION_TPL + ACTION_INIT, FOPTS);
}

function createGetters(modPath) {
  const GETTERS_TPL = ``;
  fs.outputFileSync(R(modPath, 'getters.js'), GETTERS_TPL, FOPTS);
}

function createMutations(modPath) {
  const MUTATION_TYPES_TPL = `export const UPD_XXX="";\n`;
  const MUTATIONS_TPL = `import * as types from './mutation-types';\n\nexport default {};\n`;
  fs.outputFileSync(R(modPath, 'mutation-types.js'), MUTATION_TYPES_TPL, FOPTS);
  fs.outputFileSync(R(modPath, 'mutations.js'), MUTATIONS_TPL, FOPTS);
}

function createIndex(modPath) {
  const INDEX_TPL = `import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

export default {
  state: {},
  namespaced: true,
  actions,
  getters: {
    ...getters,
  },
  mutations,
};\n`;

  fs.outputFileSync(R(modPath, 'index.js'), INDEX_TPL, FOPTS);
}
