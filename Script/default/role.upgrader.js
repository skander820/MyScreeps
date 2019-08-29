var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        creep.workStats();
        if (creep.memory.working==true){
            if(creep.upgradeController(creep.room.controller)==ERR_NOT_IN_RANGE){
                creep.moveTo(creep.room.controller);
            }

        }else{
            creep.getEnergy(true,true);
        }
	}
};

module.exports =roleUpgrader;