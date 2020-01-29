
cc.Class({
    extends: cc.Component,

    properties: {
        m_frame: cc.Node,
    },

    onLoad () {    
        // 获得m_frame节点上的 Sprite组件
        let	fillPic = this.m_frame.getComponent(cc.Sprite)
        for (let i = 0; i <= 100; i++) {
            this.scheduleOnce(function() {
                //对Sprite组件上的属性修改
                fillPic .fillRange -= 0.01
                if (fillPic .fillRange < 0) {
                    fillPic .fillRange = 0
                }
            },( 4/100)* i)
        }
    },

    start () {

    },

    // update (dt) {},
});
