module.exports = {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value:
        'id: bd7123c8c441eddfaeb5bdef\ntitle: Say Hello to HTML Elements\nchallengeType: 0\nvideoUrl: https://scrimba.com/p/pVMPUv/cE8Gpt2',
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0
        },
        end: {
          line: 6,
          column: 4,
          offset: 134
        },
        indent: [1, 1, 1, 1, 1]
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Description',
          position: {
            start: {
              line: 8,
              column: 4,
              offset: 139
            },
            end: {
              line: 8,
              column: 15,
              offset: 150
            },
            indent: []
          }
        }
      ],
      position: {
        start: {
          line: 8,
          column: 1,
          offset: 136
        },
        end: {
          line: 8,
          column: 15,
          offset: 150
        },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value:
            "Welcome to freeCodeCamp's HTML coding challenges. These will walk you through web development step-by-step.",
          position: {
            start: {
              line: 10,
              column: 1,
              offset: 152
            },
            end: {
              line: 10,
              column: 108,
              offset: 259
            },
            indent: []
          }
        }
      ],
      position: {
        start: {
          line: 10,
          column: 1,
          offset: 152
        },
        end: {
          line: 10,
          column: 108,
          offset: 259
        },
        indent: []
      }
    },
    {
      type: 'thematicBreak',
      position: {
        start: {
          line: 12,
          column: 1,
          offset: 261
        },
        end: {
          line: 12,
          column: 4,
          offset: 264
        },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To pass the test on this challenge, change your ',
          position: {
            start: {
              line: 14,
              column: 1,
              offset: 266
            },
            end: {
              line: 14,
              column: 49,
              offset: 314
            },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'h1',
          position: {
            start: {
              line: 14,
              column: 49,
              offset: 314
            },
            end: {
              line: 14,
              column: 53,
              offset: 318
            },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' element\'s text to say "Hello World".',
          position: {
            start: {
              line: 14,
              column: 53,
              offset: 318
            },
            end: {
              line: 14,
              column: 90,
              offset: 355
            },
            indent: []
          }
        }
      ],
      position: {
        start: {
          line: 14,
          column: 1,
          offset: 266
        },
        end: {
          line: 14,
          column: 90,
          offset: 355
        },
        indent: []
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Tests',
          position: {
            start: {
              line: 16,
              column: 4,
              offset: 360
            },
            end: {
              line: 16,
              column: 9,
              offset: 365
            },
            indent: []
          }
        }
      ],
      position: {
        start: {
          line: 16,
          column: 1,
          offset: 357
        },
        end: {
          line: 16,
          column: 9,
          offset: 365
        },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'yml',
      value:
        'tests:\n  - text: Your <code>h1</code> element should have the text "Hello World".\n    testString: assert.isTrue((/hello(\\s)+world/gi).test($(\'h1\').text()), \'Your <code>h1</code> element should have the text "Hello World".\');',
      position: {
        start: {
          line: 18,
          column: 1,
          offset: 367
        },
        end: {
          line: 22,
          column: 4,
          offset: 602
        },
        indent: [1, 1, 1, 1]
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Challenge Seed',
          position: {
            start: {
              line: 24,
              column: 4,
              offset: 607
            },
            end: {
              line: 24,
              column: 18,
              offset: 621
            },
            indent: []
          }
        }
      ],
      position: {
        start: {
          line: 24,
          column: 1,
          offset: 604
        },
        end: {
          line: 24,
          column: 18,
          offset: 621
        },
        indent: []
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'js',
          position: {
            start: {
              line: 27,
              column: 5,
              offset: 628
            },
            end: {
              line: 27,
              column: 7,
              offset: 630
            },
            indent: []
          }
        }
      ],
      position: {
        start: {
          line: 27,
          column: 1,
          offset: 624
        },
        end: {
          line: 27,
          column: 7,
          offset: 630
        },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'js',
      value:
        "function testFunction(arg) {\n  return arg;\n}\n\ntestFunction('hello');",
      position: {
        start: {
          line: 29,
          column: 1,
          offset: 632
        },
        end: {
          line: 35,
          column: 4,
          offset: 710
        },
        indent: [1, 1, 1, 1, 1, 1]
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Setup before each test',
          position: {
            start: {
              line: 36,
              column: 6,
              offset: 716
            },
            end: {
              line: 36,
              column: 28,
              offset: 738
            },
            indent: []
          }
        }
      ],
      position: {
        start: {
          line: 36,
          column: 1,
          offset: 711
        },
        end: {
          line: 36,
          column: 28,
          offset: 738
        },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'js',
      value: "console.log('before the test');",
      position: {
        start: {
          line: 38,
          column: 1,
          offset: 740
        },
        end: {
          line: 41,
          column: 4,
          offset: 782
        },
        indent: [1, 1, 1]
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Teardown after each test',
          position: {
            start: {
              line: 42,
              column: 6,
              offset: 788
            },
            end: {
              line: 42,
              column: 30,
              offset: 812
            },
            indent: []
          }
        }
      ],
      position: {
        start: {
          line: 42,
          column: 1,
          offset: 783
        },
        end: {
          line: 42,
          column: 30,
          offset: 812
        },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'js',
      value: "console.info('after the test');",
      position: {
        start: {
          line: 44,
          column: 1,
          offset: 814
        },
        end: {
          line: 47,
          column: 4,
          offset: 856
        },
        indent: [1, 1, 1]
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Solution',
          position: {
            start: {
              line: 49,
              column: 4,
              offset: 861
            },
            end: {
              line: 49,
              column: 12,
              offset: 869
            },
            indent: []
          }
        }
      ],
      position: {
        start: {
          line: 49,
          column: 1,
          offset: 858
        },
        end: {
          line: 49,
          column: 12,
          offset: 869
        },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'js',
      value:
        "function testFunction(arg) {\n  return arg;\n}\n\ntestFunction('hello');",
      position: {
        start: {
          line: 51,
          column: 1,
          offset: 871
        },
        end: {
          line: 57,
          column: 4,
          offset: 949
        },
        indent: [1, 1, 1, 1, 1, 1]
      }
    }
  ],
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 58,
      column: 1,
      offset: 950
    }
  }
};
