var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep,spawn) {
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else if(spawn.energy < spawn.energyCapacity) {
            if(creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawn);
            }
        }
	}
};

module.exports = roleHarvester;