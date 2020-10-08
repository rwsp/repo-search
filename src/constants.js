export const RESULTS_PER_PAGE = 12;

//values for result sorting
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

//current top 50 current languages in GitHub according to https://madnight.github.io/githut/#/pull_requests/2020/3
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
  'Visual Basic .NET',
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