// Creates a new class inheriting from Decorator
var DangerInterrupt = b3.Class(b3.Decorator);

// Remember to set the name of the node. 
DangerInterrupt.prototype.name = 'DangerInterrupt';

// Override the tick function
DangerInterrupt.prototype.tick = function(tick) {
    if (!this.child) {
        return b3.ERROR;
    }
	
    // Propagate the tick
    var status = this.child._execute(tick);
    if (status == b3.RUNNING){
        if(!tick.target.memory.lastHits){
			tick.target.memory.lastHits = tick.target.hits;
		}
		else if(tick.target.hits < tick.target.memory.lastHits){
			tick.target.say("Flee!!");
			return b3.FAILURE;
		}
	}

    return status;
};

module.exports = DangerInterrupt;