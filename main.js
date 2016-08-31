// import modules
require('behaviour3js');
var CreepBoard = require('behaviour3js.CreepBoard');
var bTree = require('role.harvester');
var baseID = bTree.id;

require('controller.createCustomCreep')();
var spawner = require('controller.spawner');

module.exports.loop = function () {
    
    
    // check for memory entries of died creeps by iterating over Memory.creeps
    for (let name in Memory.creeps) {
        // and checking if the creep is still alive
        if (Game.creeps[name] == undefined) {
            // if not, delete the memory entry
            delete Memory.creeps[name];
        }
    }
    var blackboard = new CreepBoard();
    for(let name in Game.creeps){
        var c = Game.creeps[name];
        bTree.id = baseID + c.name;
        bTree.tick(c,blackboard);
    }
    
    spawner.run();
};