/**
 *
 * constants.js - app constants
 *
 */


/**
 *
 * number of results to visually display at once
 *
 */
export const RESULTS_PER_PAGE = 12;


/**
 *
 * sorts - object tree for available sort options
 *
 */
export const sorts = {
  BEST_MATCH: {
    value: 'Match',
    urlParam: '',
  },
  STARS: {
    value: 'Stars',
    urlParam: 'stars',
  }
};


/**
 *
 * current top 50 languages in GitHub according to https://madnight.github.io/githut/#/pull_requests/2020/3
 * used for language filter
 * todo - get languages from public api somewhere
 *
 */
export const filterLanguages = [
  'JavaScript',
  'Python',
  'Java',
  'Go',
  'TypeScript',
  'C++',
  'Ruby',
  'PHP',
  'C#',
  'C',
  'Shell',
  'Scala',
  'Dart',
  'Rust',
  'Kotlin',
  'Swift',
  'Groovy',
  'DM',
  'Objective-C',
  'Elixir',
  'Perl',
  'CoffeeScript',
  'PowerShell',
  'Clojure',
  'TSQL',
  'Lua',
  'Vim script',
  'Haskell',
  'Emacs Lisp',
  'OCaml',
  'Jsonnet',
  'Erlang',
  'R',
  'Puppet',
  'Julia',
  'Fortran',
  'Coq',
  'ABAP',
  'MATLAB',
  'SystemVerilog',
  'WebAssembly',
  'F#',
  'Objective-C++',
  'Elm',
  'Vala',
  'Smalltalk',
  'Haxe',
  'Common Lisp',
  'Roff',
];