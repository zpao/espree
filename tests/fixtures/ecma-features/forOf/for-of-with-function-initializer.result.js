module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "ForOfStatement",
            "left": {
                "type": "VariableDeclaration",
                "declarations": [
                    {
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "i",
                            "range": [
                                9,
                                10
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 9
                                },
                                "end": {
                                    "line": 1,
                                    "column": 10
                                }
                            }
                        },
                        "init": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [],
                            "defaults": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": [
                                    {
                                        "type": "ReturnStatement",
                                        "argument": {
                                            "type": "BinaryExpression",
                                            "operator": "in",
                                            "left": {
                                                "type": "Literal",
                                                "value": 10,
                                                "raw": "10",
                                                "range": [
                                                    33,
                                                    35
                                                ],
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 33
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 35
                                                    }
                                                }
                                            },
                                            "right": {
                                                "type": "ArrayExpression",
                                                "elements": [],
                                                "range": [
                                                    39,
                                                    41
                                                ],
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 39
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 41
                                                    }
                                                }
                                            },
                                            "range": [
                                                33,
                                                41
                                            ],
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 33
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 41
                                                }
                                            }
                                        },
                                        "range": [
                                            26,
                                            42
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 26
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 42
                                            }
                                        }
                                    }
                                ],
                                "range": [
                                    24,
                                    43
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 24
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 43
                                    }
                                }
                            },
                            "rest": null,
                            "generator": false,
                            "expression": false,
                            "range": [
                                13,
                                43
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 13
                                },
                                "end": {
                                    "line": 1,
                                    "column": 43
                                }
                            }
                        },
                        "range": [
                            9,
                            43
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 9
                            },
                            "end": {
                                "line": 1,
                                "column": 43
                            }
                        }
                    }
                ],
                "kind": "var",
                "range": [
                    5,
                    43
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 5
                    },
                    "end": {
                        "line": 1,
                        "column": 43
                    }
                }
            },
            "right": {
                "type": "Identifier",
                "name": "list",
                "range": [
                    47,
                    51
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 47
                    },
                    "end": {
                        "line": 1,
                        "column": 51
                    }
                }
            },
            "body": {
                "type": "ExpressionStatement",
                "expression": {
                    "type": "CallExpression",
                    "callee": {
                        "type": "Identifier",
                        "name": "process",
                        "range": [
                            53,
                            60
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 53
                            },
                            "end": {
                                "line": 1,
                                "column": 60
                            }
                        }
                    },
                    "arguments": [
                        {
                            "type": "Identifier",
                            "name": "x",
                            "range": [
                                61,
                                62
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 61
                                },
                                "end": {
                                    "line": 1,
                                    "column": 62
                                }
                            }
                        }
                    ],
                    "range": [
                        53,
                        63
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 53
                        },
                        "end": {
                            "line": 1,
                            "column": 63
                        }
                    }
                },
                "range": [
                    53,
                    64
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 53
                    },
                    "end": {
                        "line": 1,
                        "column": 64
                    }
                }
            },
            "range": [
                0,
                64
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 64
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        64
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 64
        }
    }
};