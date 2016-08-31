require('behaviour3js');
/*
 * 
 */
var spawner = {
    run: function(){
        var harvesterTree = require('role.harvester');
        Game.spawns.Spawn1.createCreep([MOVE,CARRY,WORK], undefined,{role:"Harvester"});
    }
};

module.exports = spawner;