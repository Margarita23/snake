(function () {
    var defines = {};
    var entry = [null];
    function define(name, dependencies, factory) {
        defines[name] = { dependencies: dependencies, factory: factory };
        entry[0] = name;
    }
    define("require", ["exports"], function (exports) {
        Object.defineProperty(exports, "__cjsModule", { value: true });
        Object.defineProperty(exports, "default", { value: function (name) { return resolve(name); } });
    });
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    define("parametrs", ["require", "exports"], function (require, exports) {
        "use strict";
        exports.__esModule = true;
        var Parametrs = /** @class */ (function () {
            function Parametrs() {
            }
            Parametrs.fieldWidth = 30;
            Parametrs.fieldHeight = 30;
            return Parametrs;
        }());
        exports.Parametrs = Parametrs;
    });
    define("block", ["require", "exports"], function (require, exports) {
        "use strict";
        exports.__esModule = true;
        var Block = /** @class */ (function () {
            function Block(x, y) {
                this.x = x;
                this.y = y;
            }
            return Block;
        }());
        exports.Block = Block;
    });
    define("vector", ["require", "exports"], function (require, exports) {
        "use strict";
        exports.__esModule = true;
        var Vector;
        (function (Vector) {
            Vector[Vector["Up"] = 38] = "Up";
            Vector[Vector["Down"] = 40] = "Down";
            Vector[Vector["Left"] = 37] = "Left";
            Vector[Vector["Right"] = 39] = "Right";
        })(Vector = exports.Vector || (exports.Vector = {}));
    });
    define("Food", ["require", "exports", "block", "parametrs"], function (require, exports, block_1, parametrs_1) {
        "use strict";
        exports.__esModule = true;
        var Food = /** @class */ (function (_super) {
            __extends(Food, _super);
            function Food(x, y) {
                if (x === void 0) { x = -1; }
                if (y === void 0) { y = -1; }
                return _super.call(this, x, y) || this;
            }
            Food.prototype.goOnField = function () {
                var x = Math.floor(Math.random() * parametrs_1.Parametrs.fieldWidth);
                var y = Math.floor(Math.random() * parametrs_1.Parametrs.fieldWidth);
                this.x = x;
                this.y = y;
                return this;
            };
            return Food;
        }(block_1.Block));
        exports.Food = Food;
    });
    define("sound", ["require", "exports"], function (require, exports) {
        "use strict";
        exports.__esModule = true;
        var Sound = /** @class */ (function () {
            function Sound() {
                this.audio = new Audio();
            }
            Sound.prototype.run = function (name) {
                this.audio.src = require("../assets/" + name + ".mp3");
                this.audio.play();
            };
            return Sound;
        }());
        exports.Sound = Sound;
    });
    define("snake", ["require", "exports", "block", "vector", "parametrs", "Food", "sound"], function (require, exports, block_2, vector_1, parametrs_2, Food_1, sound_1) {
        "use strict";
        exports.__esModule = true;
        var Snake = /** @class */ (function () {
            function Snake() {
                this.vector = vector_1.Vector.Up;
                this.myFood = new Food_1.Food(-1, -1);
                this.foodInStomach = [];
                this.kill = false;
                this.sound = new sound_1.Sound();
                this.blocks = [];
                this.blocks.push(new block_2.Block(10, 20));
                this.kill = false;
            }
            Snake.prototype.move = function () {
                if (this.canSnakeGo()) {
                    this.eat();
                    this.moveBody(this.blocks[0]);
                    switch (this.vector) {
                        case vector_1.Vector.Up:
                            this.blocks[0].y = this.blocks[0].y - 1;
                            break;
                        case vector_1.Vector.Right:
                            this.blocks[0].x = this.blocks[0].x + 1;
                            break;
                        case vector_1.Vector.Down:
                            this.blocks[0].y = this.blocks[0].y + 1;
                            break;
                        case vector_1.Vector.Left:
                            this.blocks[0].x = this.blocks[0].x - 1;
                            break;
                        default: ;
                    }
                }
                else {
                    this.kill = true;
                }
            };
            Snake.prototype.putFoodOnField = function () {
                if (this.myFood.x == -1 && this.myFood.y == -1) {
                    this.myFood = this.myFood.goOnField();
                }
            };
            Snake.prototype.moveBody = function (head) {
                for (var i = this.blocks.length - 1; i > 0; i--) {
                    this.blocks[i].x = this.blocks[i - 1].x;
                    this.blocks[i].y = this.blocks[i - 1].y;
                }
            };
            Snake.prototype.eat = function () {
                var _this = this;
                var lastBlock = this.blocks[this.blocks.length - 1];
                if (this.blocks[0].x == this.myFood.x && this.blocks[0].y == this.myFood.y) {
                    this.foodInStomach.push(new block_2.Block(this.myFood.x, this.myFood.y));
                    this.myFood.x = -1;
                    this.myFood.y = -1;
                    this.sound.run("eating");
                }
                this.foodInStomach.forEach(function (block, index) {
                    if (block.x == lastBlock.x && block.y == lastBlock.y) {
                        _this.blocks.push(new block_2.Block(block.x, block.y));
                        _this.foodInStomach.splice(index, 1);
                    }
                });
            };
            Snake.prototype.canSnakeGo = function () {
                var isCanGo = true;
                var block = this.blocks[0];
                if (block.x < 0 ||
                    block.x >= parametrs_2.Parametrs.fieldWidth ||
                    block.y < 0 ||
                    block.y >= parametrs_2.Parametrs.fieldWidth ||
                    this.headHitTheBody()) {
                    isCanGo = false;
                }
                return isCanGo;
            };
            Snake.prototype.headHitTheBody = function () {
                var isHit = false;
                for (var i = 1; i < this.blocks.length; i++) {
                    if (this.blocks[0].x === this.blocks[i].x &&
                        this.blocks[0].y === this.blocks[i].y) {
                        isHit = true;
                    }
                }
                return isHit;
            };
            return Snake;
        }());
        exports.Snake = Snake;
    });
    define("grid", ["require", "exports", "parametrs", "vector"], function (require, exports, parametrs_3, vector_2) {
        "use strict";
        exports.__esModule = true;
        var Grid = /** @class */ (function () {
            function Grid(game) {
                this.totalHeight = document.getElementById('arena').offsetHeight;
                this.totalWidth = document.getElementById('arena').offsetWidth;
                this.gameSize = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;
                this.cellSize = this.gameSize / parametrs_3.Parametrs.fieldWidth;
                this.fieldFon = new Image();
                this.canvas = document.getElementById('canvas');
                this.canvas.width = this.gameSize;
                this.canvas.height = this.gameSize;
                this.ctx = this.canvas.getContext("2d");
                this.game = game;
                this.snake = game.snake;
                this.food = game.snake.myFood;
                this.fieldFon.src = require('../assets/carbon.jpg');
            }
            ;
            Grid.prototype.draw = function () {
                this.fon();
                this.drawFood();
                this.drawBlocks();
                this.drawFoodInStomach();
            };
            Grid.prototype.fon = function () {
                this.ctx.clearRect(0, 0, this.totalWidth, this.totalHeight);
                this.ctx.strokeStyle = ("rgb(255,255,255)");
                this.ctx.lineWidth = 5;
                this.ctx.strokeRect(0, 0, this.gameSize, this.gameSize);
            };
            Grid.prototype.resize = function () {
                this.totalHeight = document.getElementById('arena').offsetHeight;
                this.totalWidth = document.getElementById('arena').offsetWidth;
                this.gameSize = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;
                this.canvas.width = this.gameSize;
                this.canvas.height = this.gameSize;
                this.cellSize = this.gameSize / parametrs_3.Parametrs.fieldWidth;
                this.ctx.clearRect(0, 0, document.getElementById('game').offsetWidth, document.getElementById('game').offsetHeight);
            };
            Grid.prototype.drawBlocks = function () {
                var _this = this;
                this.snake.blocks.forEach(function (block) {
                    if (_this.snake.blocks[0] === block) {
                        _this.drawHeadSnake(block);
                    }
                    else {
                        _this.ctx.fillStyle = "rgb(200, 0, 0)";
                        _this.ctx.fillRect(block.x * _this.cellSize, block.y * _this.cellSize, _this.cellSize, _this.cellSize);
                    }
                });
            };
            Grid.prototype.drawHeadSnake = function (block) {
                this.ctx.fillStyle = "rgb(200, 0, 0)";
                this.ctx.beginPath();
                var x = block.x * this.cellSize;
                var y = block.y * this.cellSize;
                this.ctx.moveTo(x, y);
                switch (this.snake.vector) {
                    case vector_2.Vector.Up:
                        this.ctx.lineTo(x + this.cellSize / 2, y + this.cellSize / 2);
                        this.ctx.lineTo(x + this.cellSize, y);
                        this.ctx.lineTo(x + this.cellSize, y + this.cellSize);
                        this.ctx.lineTo(x, y + this.cellSize);
                        break;
                    case vector_2.Vector.Right:
                        this.ctx.lineTo(x + this.cellSize, y);
                        this.ctx.lineTo(x + this.cellSize / 2, y + this.cellSize / 2);
                        this.ctx.lineTo(x + this.cellSize, y + this.cellSize);
                        this.ctx.lineTo(x, y + this.cellSize);
                        break;
                    case vector_2.Vector.Down:
                        this.ctx.lineTo(x + this.cellSize, y);
                        this.ctx.lineTo(x + this.cellSize, y + this.cellSize);
                        this.ctx.lineTo(x + this.cellSize / 2, y + this.cellSize / 2);
                        this.ctx.lineTo(x, y + this.cellSize);
                        break;
                    case vector_2.Vector.Left:
                        this.ctx.lineTo(x + this.cellSize, y);
                        this.ctx.lineTo(x + this.cellSize, y + this.cellSize);
                        this.ctx.lineTo(x, y + this.cellSize);
                        this.ctx.lineTo(x + this.cellSize / 2, y + this.cellSize / 2);
                        break;
                }
                this.ctx.fill();
            };
            Grid.prototype.drawFoodInStomach = function () {
                var _this = this;
                this.snake.foodInStomach.forEach(function (block) {
                    _this.ctx.fillStyle = "rgb(100, 0, 0)";
                    _this.ctx.beginPath();
                    _this.ctx.arc(block.x * _this.cellSize + _this.cellSize / 2, block.y * _this.cellSize + _this.cellSize / 2, _this.cellSize / 2, 0, 2 * Math.PI, false);
                    _this.ctx.fill();
                });
            };
            Grid.prototype.drawFood = function () {
                this.ctx.fillStyle = "rgb(0, 100, 0)";
                this.ctx.beginPath();
                this.ctx.arc(this.food.x * this.cellSize + this.cellSize / 2, this.food.y * this.cellSize + this.cellSize / 2, this.cellSize / 2, 0, 2 * Math.PI, false);
                this.ctx.fill();
            };
            return Grid;
        }());
        exports.Grid = Grid;
    });
    define("game", ["require", "exports", "grid", "snake"], function (require, exports, grid_1, snake_1) {
        "use strict";
        exports.__esModule = true;
        var Game = /** @class */ (function () {
            function Game() {
                this.level = 500;
                this.changeLevel = -1;
                this.snake = new snake_1.Snake();
                this.grid = new grid_1.Grid(this);
            }
            Game.prototype.run = function () {
                var _this_1 = this;
                this.level = 500;
                var _this = this;
                setTimeout(function request() {
                    if (_this.snake.kill) {
                        _this.end();
                        alert("Game OVER!");
                    }
                    else {
                        _this.snake.putFoodOnField();
                        _this.snake.move();
                        _this.grid.draw();
                        _this.showScore();
                        if (_this.snake.blocks.length % 10 === 0 && _this.changeLevel === -1) {
                            _this.changeLevel = _this.snake.blocks.length;
                            _this.level = _this.level - 50;
                        }
                        if (_this.snake.blocks.length % 10 != 0) {
                            _this.changeLevel = -1;
                        }
                    }
                    setTimeout(request, _this.level);
                }, this.level);
                document.addEventListener('keydown', function (event) {
                    if (event.keyCode === 38 || event.keyCode === 40 ||
                        event.keyCode === 37 || event.keyCode === 39) {
                        _this_1.snake.vector = event.keyCode;
                    }
                });
            };
            Game.prototype.end = function () {
                this.grid = null;
                this.snake.kill = true;
                this.refresh();
            };
            Game.prototype.refresh = function () {
                this.snake = new snake_1.Snake();
                this.grid = new grid_1.Grid(this);
            };
            Game.prototype.showScore = function () {
                var score = document.getElementById('score');
                score.innerHTML = String(this.snake.blocks.length);
            };
            return Game;
        }());
        exports.Game = Game;
    });
    define("main", ["require", "exports", "game"], function (require, exports, game_1) {
        "use strict";
        exports.__esModule = true;
        require('file-loader?name=[name].[ext]!../index.html');
        var game = new game_1.Game();
        game.run();
        var startGameButton = document.getElementById('startGame');
        startGameButton.onclick = function () {
            game.end();
        };
        window.onresize = function () {
            game.grid.resize();
            game.grid.draw();
        };
        var pauseButton = document.getElementById('pauseGame');
        pauseButton.onclick = function () {
            alert("PAUSE");
        };
    });
    
    'marker:entry';

    function get_define(name) {
        if (defines[name]) {
            return defines[name];
        }
        else if (defines[name + '/index']) {
            return defines[name + '/index'];
        }
        else {
            var dependencies = ['exports'];
            var factory = function (exports) {
                try {
                    Object.defineProperty(exports, "__cjsModule", { value: true });
                    Object.defineProperty(exports, "default", { value: require(name) });
                }
                catch (_a) {
                    throw Error(['module ', name, ' not found.'].join(''));
                }
            };
            return { dependencies: dependencies, factory: factory };
        }
    }
    var instances = {};
    function resolve(name) {
        if (instances[name]) {
            return instances[name];
        }
        if (name === 'exports') {
            return {};
        }
        var define = get_define(name);
        instances[name] = {};
        var dependencies = define.dependencies.map(function (name) { return resolve(name); });
        define.factory.apply(define, dependencies);
        var exports = dependencies[define.dependencies.indexOf('exports')];
        instances[name] = (exports['__cjsModule']) ? exports["default"] : exports;
        return instances[name];
    }
    if (entry[0] !== null) {
        return resolve(entry[0]);
    }
})();