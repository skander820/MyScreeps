var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        creep.workStats();
        if (creep.memory.working==true){
            var structure=creep.pos.findClosestByPath(FIND_MY_STRUCTURES,
                {filter:(s)=>s.structureType==StructureSpawn||s.structureType==StructureExtension||s.structureType==StructureTower&s.energy<s.energyCapacity});

            if (structure==undefined){
                structure=creep.room.storage;
            }else{
                if(creep.transfer(structure,RESOURCE_ENERGY)==ERR_NOT_IN_RANGE){
                    creep.moveTo(structure);
                }
            }
        }else{
            creep.getEnergy(true,true);
        }
	   
	}
};

module.exports = roleHarvester;