// setup some minimum numbers for different roles
var MIN_HARVESTERS = 4;
var MIN_UPGRADERS = 0;
var MIN_BUILDERS = 0;
var MIN_REPAIRERS = 0;
var MIN_WALL_REPAIRERS = 0;
var MIN_DEFENDERS= 0;

var calculateSpawn = {
    run: function() {
        for(let spawn in Game.spawns){
            var spawner = Game.spawns[spawn];
            // count the number of creeps alive for each role
            // _.sum will count the number of properties in Game.creeps filtered by the
            //  arrow function, which checks for the creep being a harvester
            var numHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
            var numUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
            var numBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
            var numRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');
            var numWallRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer');
            var numDefenders = _.sum(Game.creeps, (c) => c.memory.role =='defender');
     
            var energy = spawner.room.energyCapacityAvailable;
            var name = undefined;
    
            // if not enough harvesters
            if (numHarvesters < MIN_HARVESTERS) {
                // try to spawn one
                name = spawner.createCustomCreep(energy, 'harvester');
    
                // if spawning failed and we have no harvesters left
                if (name == ERR_NOT_ENOUGH_ENERGY && numHarvesters == 0) {
                    // spawn one with what is available
                    name = spawner.createCustomCreep(spawner.room.energyAvailable, 'harvester');
                }
            }
            // if not enough upgraders
            else if (numUpgraders < MIN_UPGRADERS) {
                // try to spawn one
                name = spawner.createCustomCreep(energy, 'upgrader');
            }
            // if not enough repairers
            else if (numRepairers < MIN_REPAIRERS) {
                // try to spawn one
                name = spawner.createCustomCreep(energy, 'repairer');
            }
            // if not enough builders
            else if (numBuilders < MIN_BUILDERS) {
                // try to spawn one
                name = spawner.createCustomCreep(energy, 'builder');
            }
            // if not enough wallRepairers
            else if (numWallRepairers < MIN_WALL_REPAIRERS) {
                // try to spawn one
                name = spawner.createCustomCreep(energy, 'wallRepairer');
            }
            else if(numDefenders < MIN_DEFENDERS){
                name = spawner.createMilitaryCreep(energy,'defender');
            }
    
            // print name to console if spawning was a success
            // name > 0 would not work since string > 0 returns false
            if (!(name < 0) && typeof name !== 'undefined') {
                console.log(name);
                console.log("Spawned new creep: " + name + ". With role: "+ Game.creeps[name].memory.role + ".");
            }
        }
    }
};

module.exports = calculateSpawn;