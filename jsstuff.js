class JSStuff {
  getInfo() {
    return {
      id: 'jsstuff',
      name: 'JS Stuff',
      blocks: [
        {
          opcode: 'roundNearest',
          blockType: Scratch.BlockType.REPORTER,
          text: 'round [A] to the nearest [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '3.14'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0.1'
            }
          }
        },
{
          opcode: 'joinThree',
          blockType: Scratch.BlockType.REPORTER,
          text: 'join [A] [B] [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple '
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana '
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'pear'
            }
          }
        },
{
          opcode: 'mathDropdown',
          blockType: Scratch.BlockType.REPORTER,
          text: '[A] of [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              menu: 'MATH_MENU'
            },
            B: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
{
          opcode: 'reverse',
          blockType: Scratch.BlockType.REPORTER,
          text: 'reverse [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
{
          opcode: 'oddOrEven',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[A] is [B] ?',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              menu: 'ODD_OR_EVEN'
            }
          }
        }
      ],
      menus: {
        MATH_MENU: {
          acceptReporters: false,
          items: [
            {
              text: 'sign',
              value: 'sign'
            },
            {
              text: 'sigmoid',
              value: 'sigmoid'
            }
          ]
        },
        ODD_OR_EVEN: {
          acceptReporters: true,
          items: [
            {
              text: 'odd',
              value: 'odd'
            },
            {
              text: 'even',
              value: 'even'
            }
          ]
        }
      }
    };
  }

  roundNearest(args) {
    return Math.round(args.A / args.B) * args.B;
  }
  joinThree(args) {
    return args.A.concat(args.B.concat(args.C));
  }
  mathDropdown(args) {
    if (args.A === 'sign') {
    return Math.sign(args.B);
} else {
    return 1 / (1 + Math.E ** -args.B);
  }
}
  reverse(args) {
    return args.A.split('').reverse().join('');
  }
  oddOrEven(args) {
    if (args.B === 'even') {
    return Number.isInteger(args.A / 2);
} else {
    return Number.isInteger(args.A / 2 + 0.5);
  }
}
}
Scratch.extensions.register(new JSStuff());
