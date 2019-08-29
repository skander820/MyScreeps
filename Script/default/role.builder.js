var roleUpgrader=require('role.upgrader');
var roleBuilder = {

    /**
     * 当有construction_site时从最近container中取energy建造
     * 没有时视为upgrader
     * 
     *  @param {Creep} creep **/
    run: function(creep) {
        creep.workStats();
        if (creep.memory.working==true){
            var constructionSite=creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            if (constructionSite!=undefined){
                if(creep.build(constructionSite)==ERR_NOT_IN_RANGE){
                    creep.moveTo(constructionSite);
                }
            }else{
                roleUpgrader.run(creep);
            }
        }else{
            creep.getEnergy(true,true)
        }
	}
};

module.exports = roleBuilder;