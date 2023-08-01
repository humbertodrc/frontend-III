import { locales } from './constants';
import { EN_CONTENT } from './en-US';
import { ES_CONTENT } from './es-ES';
import { PT_CONTENT } from './pt-BR';

const {EN_US, ES_ES, PT_BR } = locales;

export const CONTENT_BY_LOCALE = {
  [ES_ES]: ES_CONTENT,
  [EN_US]: EN_CONTENT,
  [PT_BR]: PT_CONTENT,
};