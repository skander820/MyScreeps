require('prototype.creeps');
module.exports.loop = function () {
    //如果creeps死亡，删除memory里的记录
    for (let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) {
            delete Memory.creeps[name];
        }
    }
    //每个creeps发挥自己的角色
    for (let name in Game.creeps) {
        Game.creeps[name].runRole();
    }
}