var roleHarvester = require('role.harvester');
var roleUpgrader= require('role.upgrader');
module.exports.loop = function () {
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        var spawn =Game.spawns['spawn1']
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep,spawn);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
}