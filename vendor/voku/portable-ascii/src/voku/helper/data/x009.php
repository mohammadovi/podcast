{
  "name": "cpp",
  "displayName": "%displayName%",
  "description": "%description%",
  "version": "1.0.0",
  "publisher": "vscode",
  "license": "MIT",
  "engines": {
    "vscode": "*"
  },
  "scripts": {
    "update-grammar": "node ./build/update-grammars.js"
  },
  "contributes": {
    "languages": [
      {
        "id": "c",
        "extensions": [
          ".c",
          ".i"
        ],
        "aliases": [
          "C",
          "c"
        ],
        "configuration": "./language-configuration.json"
      },
      {
        "id": "cpp",
        "extensions": [
          ".cpp",
          ".cc",
          ".cxx",
          ".c++",
          ".hpp",
          ".hh",
          ".hxx",
          ".h++",
          ".h",
          ".ii",
          ".ino",
          ".inl",
          ".ipp",
          ".hpp.in",
          ".h.in"
        ],
        "aliases": [
          "C++",
          "Cpp",
          "cpp"
        ],
        "configuration": "./language-configuration.json"
      },
      {
        "id": "cuda-cpp",
        "extensions": [
          ".cu",
          ".cuh"
        ],
        "aliases": [
          "CUDA C++"
        ],
        "configuration": "./language-configuration.json"
      }
    ],
    "grammars": [
      {
        "language": "c",
        "scopeName": "source.c",
        "path": "./syntaxes/c.tmLanguage.json"
      },
      {
        "language": "cpp",
        "scopeName": "source.cpp.embedded.macro",
        "path": "./syntaxes/cpp.embedded.macro.tmLanguage.json"
      