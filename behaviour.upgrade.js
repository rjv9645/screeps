require('behaviour3js')
// Creates a new class inheriting from Action
var Upgrade = b3.Class(b3.Action);

// Remember to set the name of the node. 
Upgrade.prototype.name = 'Upgrade';

// Sets the parameters variable to tell editor who they are
Upgrade.prototype.parameters = {'milliseconds': 0};

// Override the initialize method, remember to call this method on super
Upgrade.prototype.__Action_initialize = Upgrade.prototype.initialize;
Upgrade.prototype.initialize = function(settings) {
    settings = settings || {};

    this.__Action_initialize();
    this.endTime = settings.milliseconds || 0;
}

// Override the open method, so it can store the time when the node was
// open    
Upgrade.prototype.open = function(tick) {
    var startTime = (new Date()).getTime();
    tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
}

// Override the tick method
Upgrade.prototype.tick = function(tick) {
    var currTime = (new Date()).getTime();
    var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);
            
    if (tick.target.upgradeController(tick.target.room.controller) == ERR_NOT_IN_RANGE) {
        // if not in range, move towards the controller           
        tick.target.moveTo(tick.target.room.controller);  
    }
    
    if (tick.target.carry.energy == 0) {
        // switch state
        return b3.SUCCESS;
    }else{
        return b3.RUNNING; 
    }
}

module.exports = Upgrade;