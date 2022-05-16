namespace SpriteKind {
    export const Place = SpriteKind.create()
    export const seed = SpriteKind.create()
    export const tree = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const bullet = SpriteKind.create()
    export const Cup = SpriteKind.create()
    export const Letter = SpriteKind.create()
    export const Bossphu = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bossphu, function (sprite, otherSprite) {
    if (Sword % 3 != 1) {
        info.changeLifeBy(-1)
        music.playMelody("- - A E - - - - ", 500)
        otherSprite.destroy(effects.spray, 500)
        SummonBoss = 3
        tiles.placeOnTile(sprites.create(assets.image`R`, SpriteKind.Letter), otherSprite.tilemapLocation())
    } else {
        music.baDing.play()
        otherSprite.destroy(effects.spray, 500)
        info.changeScoreBy(1)
        SummonBoss = 3
        tiles.placeOnTile(sprites.create(assets.image`R`, SpriteKind.Letter), otherSprite.tilemapLocation())
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Back Soldier Animation`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.spray, 1000)
    Apple_tree.removeAt(Apple_tree.indexOf(otherSprite)).destroy()
})
// seeding
// 
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileAtLocationEquals(mySprite.tilemapLocation(), sprites.castle.tileGrass1) || tiles.tileAtLocationEquals(mySprite.tilemapLocation(), sprites.castle.tileDarkGrass1)) {
        tiles.setTileAt(mySprite.tilemapLocation(), sprites.castle.tilePath5)
    } else if (tiles.tileAtLocationEquals(mySprite.tilemapLocation(), sprites.castle.tilePath5)) {
        Seed_list.push(sprites.create(assets.image`Seed`, SpriteKind.seed))
        tiles.placeOnTile(Seed_list[Seed_list.length - 1], mySprite.tilemapLocation())
        tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`Dat Trong Cay`)
        for (let value of Tree_list) {
            if (Seed_list[Seed_list.length - 1].x == value.x && Seed_list[Seed_list.length - 1].y == value.y) {
                Seed_list.pop().destroy()
            }
        }
    }
})
sprites.onOverlap(SpriteKind.bullet, SpriteKind.Bossphu, function (sprite, otherSprite) {
    tiles.placeOnTile(sprites.create(assets.image`R`, SpriteKind.Letter), otherSprite.tilemapLocation())
    sprite.destroy()
    otherSprite.destroy(effects.spray, 500)
    SummonBoss = 3
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Place, function (sprite, otherSprite) {
    V = sprites.create(assets.image`V`, SpriteKind.Letter)
    V.setPosition(otherSprite.x, otherSprite.y)
    otherSprite.destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cup, function (sprite, otherSprite) {
    game.over(true)
})
// rut-thu kiem
// 
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Sword += 1
    if (Sword % 2 == 1) {
        mySprite.setImage(img`
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff......ccc.
            .ffefbf44fbfeff....cddc.
            .ffefbf44fbfeff...cddc..
            .fee4dddddd4eef.ccddc...
            fdfeeddddd4eeffecddc....
            fbffee4444ee4fddccc.....
            fbf4f222222f1edde.......
            fcf.f222222f44ee........
            .ff.f445544f............
            ....ffffffff............
            .....ff..ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `)
    } else {
        mySprite.setImage(assets.image`soldier`)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    right = 0
    if (Sword % 3 == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        true
        )
    } else if (Sword % 3 == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Danh trai`,
        200,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Left Gun`,
        200,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.spray, 1000)
    Apple_tree.removeAt(Apple_tree.indexOf(otherSprite)).destroy()
})
sprites.onOverlap(SpriteKind.bullet, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.placeOnTile(sprites.create(assets.image`T`, SpriteKind.Letter), location)
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
    Letter_T += -1
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    Cup = sprites.create(assets.image`Cup`, SpriteKind.Cup)
    tiles.placeOnTile(Cup, Bossstatus.spriteAttachedTo().tilemapLocation())
    animation.runImageAnimation(
    Cup,
    assets.animation`Cup Animation`,
    200,
    true
    )
    Bossstatus.spriteAttachedTo().destroy(effects.spray, 500)
    SummonBoss = 3
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    right = 1
    if (Sword % 3 == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . f f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . . e 2 2 2 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . . f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . f f 4 4 4 e d d e b f . . 
            . . . f f f f f f e e f f . . . 
            . . . . f f . . . f f f . . . . 
            `],
        100,
        true
        )
    } else if (Sword % 3 == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Danh phai`,
        200,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Right Gun`,
        200,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1 + -1 * Finish)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Boss, SpriteKind.bullet, function (sprite, otherSprite) {
    Bossstatus.value += -8 - Finish
    otherSprite.destroy()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Soldier Animation`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        info.changeLifeBy(1)
        info.changeScoreBy(1)
        otherSprite.destroy(effects.spray, 500)
        Apple_tree.removeAt(Apple_tree.indexOf(otherSprite))
        music.setVolume(150)
        music.playMelody("- - - F C5 - - - ", 500)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.tree, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.spray, 1000)
    Tree_list.removeAt(Tree_list.indexOf(otherSprite)).destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Sword % 3 != 1) {
        info.changeLifeBy(-1)
        music.playMelody("- - A E - - - - ", 500)
        otherSprite.destroy(effects.spray, 500)
    } else {
        music.baDing.play()
        otherSprite.destroy(effects.spray, 500)
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Letter, function (sprite, otherSprite) {
    Finish += -1
    otherSprite.destroy(effects.spray, 500)
    game.splash("ACHIEVE LETTER")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    game.over(false)
    sprite.destroy()
})
let Ghost: Sprite = null
let Bossphu: Sprite = null
let projectile3: Sprite = null
let Boss: Sprite = null
let projectile: Sprite = null
let projectile2: Sprite = null
let Bossstatus: StatusBarSprite = null
let Cup: Sprite = null
let V: Sprite = null
let Tree_list: Sprite[] = []
let Seed_list: Sprite[] = []
let Apple_tree: Sprite[] = []
let right = 0
let SummonBoss = 0
let Sword = 0
let Finish = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`soldier`, SpriteKind.Player)
mySprite.setBounceOnWall(true)
info.setLife(6)
info.setScore(0)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
let House = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.Place)
House.setPosition(25, 25)
sprites.create(assets.image`C`, SpriteKind.Letter).setPosition(480, 380)
sprites.create(assets.image`O`, SpriteKind.Letter).setPosition(685, 685)
let Letter_T = 1
let Letter_I = 0
Finish = 6
let Count = 0
Sword = 0
SummonBoss = 0
right = 1
Apple_tree = [sprites.create(img`
    .............6666...............
    ..........666667766.6666........
    .........677777777767776........
    ......66667775577757777666......
    .....677666675557557776227666...
    .....6776777775555577772266776..
    ...66666777777775777777766666...
    .66667767777755757555777776776..
    6666722677775577557555777767766.
    .6667227777777775577777722767666
    .c6766777677777775777777227766..
    cc77666667777777777777777666666c
    cc76666677777777777777777766776c
    c6666776777777777777766677666776
    66667766667776777767767766766666
    ccc76677672276677762267776776ccc
    cc7766776722677677622667767766cc
    .666c676667677766667766666666cc.
    .ccc66676666776666677677666cccc.
    ...ccc77c6767666676676677666ccc.
    ...cc676c7766676677666666c666cc.
    ....c6cc676c6677677c66c666ccc...
    ....ccccc6c66667667cc6ccc6ccc...
    ......ccccc66c66c66cccccccc.....
    .......cc.cc6c6ccc6cccc.cc......
    ...........cccccccccc...........
    .............feeeeee............
    ............feeeeeefe...........
    .........eeeeefeeeffee..........
    ............ffffeef..ee.........
    ...............fee..............
    ................e...............
    `, SpriteKind.Food), sprites.create(img`
    .............6666...............
    ..........666667766.6666........
    .........677777777767776........
    ......66667775577757777666......
    .....677666675557557776227666...
    .....6776777775555577772266776..
    ...66666777777775777777766666...
    .66667767777755757555777776776..
    6666722677775577557555777767766.
    .6667227777777775577777722767666
    .c6766777677777775777777227766..
    cc77666667777777777777777666666c
    cc76666677777777777777777766776c
    c6666776777777777777766677666776
    66667766667776777767767766766666
    ccc76677672276677762267776776ccc
    cc7766776722677677622667767766cc
    .666c676667677766667766666666cc.
    .ccc66676666776666677677666cccc.
    ...ccc77c6767666676676677666ccc.
    ...cc676c7766676677666666c666cc.
    ....c6cc676c6677677c66c666ccc...
    ....ccccc6c66667667cc6ccc6ccc...
    ......ccccc66c66c66cccccccc.....
    .......cc.cc6c6ccc6cccc.cc......
    ...........cccccccccc...........
    .............feeeeee............
    ............feeeeeefe...........
    .........eeeeefeeeffee..........
    ............ffffeef..ee.........
    ...............fee..............
    ................e...............
    `, SpriteKind.Food), sprites.create(img`
    .............6666...............
    ..........666667766.6666........
    .........677777777767776........
    ......66667775577757777666......
    .....677666675557557776227666...
    .....6776777775555577772266776..
    ...66666777777775777777766666...
    .66667767777755757555777776776..
    6666722677775577557555777767766.
    .6667227777777775577777722767666
    .c6766777677777775777777227766..
    cc77666667777777777777777666666c
    cc76666677777777777777777766776c
    c6666776777777777777766677666776
    66667766667776777767767766766666
    ccc76677672276677762267776776ccc
    cc7766776722677677622667767766cc
    .666c676667677766667766666666cc.
    .ccc66676666776666677677666cccc.
    ...ccc77c6767666676676677666ccc.
    ...cc676c7766676677666666c666cc.
    ....c6cc676c6677677c66c666ccc...
    ....ccccc6c66667667cc6ccc6ccc...
    ......ccccc66c66c66cccccccc.....
    .......cc.cc6c6ccc6cccc.cc......
    ...........cccccccccc...........
    .............feeeeee............
    ............feeeeeefe...........
    .........eeeeefeeeffee..........
    ............ffffeef..ee.........
    ...............fee..............
    ................e...............
    `, SpriteKind.Food)]
for (let value of Apple_tree) {
    value.setPosition(randint(100, 240), randint(0, 160))
}
Seed_list = []
Tree_list = []
game.onUpdateInterval(1000, function () {
    if (Sword % 3 == 2) {
        if (right == 1) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . . . . 2 1 1 1 1 2 . . . . . 
                . . . . . 2 1 1 1 1 2 . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 250, 0)
        } else if (right == 0) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . . . . 2 1 1 1 1 2 . . . . . 
                . . . . . 2 1 1 1 1 2 . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -250, 0)
        }
        projectile2.setKind(SpriteKind.bullet)
    }
})
game.onUpdateInterval(1000, function () {
    if (SummonBoss == 1) {
        for (let index = 0; index < 2 + Finish; index++) {
            projectile = sprites.createProjectileFromSprite(assets.image`Power`, Boss, 50, randint(-50, 50))
            projectile = sprites.createProjectileFromSprite(assets.image`Power`, Boss, -50, randint(-50, 50))
            projectile = sprites.createProjectileFromSprite(assets.image`Power`, Boss, randint(-50, 50), 50)
            projectile = sprites.createProjectileFromSprite(assets.image`Power`, Boss, randint(-50, 50), -50)
        }
    } else if (SummonBoss == 2) {
        for (let index = 0; index < 2; index++) {
            projectile3 = sprites.createProjectileFromSprite(assets.image`bat`, Bossphu, 50, randint(-50, 50))
            projectile3 = sprites.createProjectileFromSprite(assets.image`bat`, Bossphu, -50, randint(-50, 50))
            projectile3 = sprites.createProjectileFromSprite(assets.image`bat`, Bossphu, randint(-50, 50), 50)
            projectile3 = sprites.createProjectileFromSprite(assets.image`bat`, Bossphu, randint(-50, 50), -50)
        }
    }
})
forever(function () {
    if (Count % 2 != 0) {
        music.setVolume(30)
        music.playMelody("C5 B G E F D C D ", 120)
    } else {
        music.setVolume(35)
        music.playMelody("C5 B C5 A B G A F ", 300)
    }
})
// days and nights
// 80s = 1day
game.onUpdateInterval(40000, function () {
    Count += 1
    while (Tree_list.length != 0) {
        Apple_tree.push(sprites.create(img`
            .............6666...............
            ..........666667766.6666........
            .........677777777767776........
            ......66667775577757777666......
            .....677666675557557776227666...
            .....6776777775555577772266776..
            ...66666777777775777777766666...
            .66667767777755757555777776776..
            6666722677775577557555777767766.
            .6667227777777775577777722767666
            .c6766777677777775777777227766..
            cc77666667777777777777777666666c
            cc76666677777777777777777766776c
            c6666776777777777777766677666776
            66667766667776777767767766766666
            ccc76677672276677762267776776ccc
            cc7766776722677677622667767766cc
            .666c676667677766667766666666cc.
            .ccc66676666776666677677666cccc.
            ...ccc77c6767666676676677666ccc.
            ...cc676c7766676677666666c666cc.
            ....c6cc676c6677677c66c666ccc...
            ....ccccc6c66667667cc6ccc6ccc...
            ......ccccc66c66c66cccccccc.....
            .......cc.cc6c6ccc6cccc.cc......
            ...........cccccccccc...........
            .............feeeeee............
            ............feeeeeefe...........
            .........eeeeefeeeffee..........
            ............ffffeef..ee.........
            ...............fee..............
            ................e...............
            `, SpriteKind.Food))
        tiles.placeOnTile(Apple_tree[Apple_tree.length - 1], Tree_list[0].tilemapLocation())
        Tree_list.removeAt(0).destroy(effects.spray, 500)
    }
    while (Seed_list.length != 0) {
        Tree_list.push(sprites.create(img`
            .............6666...............
            ..........666667766.6666........
            .........677777777767776........
            ......66667775577757777666......
            .....677666675557557776777666...
            .....6776777775555577777766776..
            ...66666777777775777777766666...
            .66667767777755757555777776776..
            6666777677775577557555777767766.
            .6667767777777775577777777767666
            .c6766777677777775777777677766..
            cc77666667777777777777777666666c
            cc76666677777777777777777766776c
            c6666776777777777777766677666776
            66667766667776777767767766766666
            ccc76677677776677766767776776ccc
            cc7766776777677677676667767766cc
            .666c676667677766667766666666cc.
            .ccc66676666776666677677666cccc.
            ...ccc77c6767666676676677666ccc.
            ...cc676c7766676677666666c666cc.
            ....c6cc676c6677677c66c666ccc...
            ....ccccc6c66667667cc6ccc6ccc...
            ......ccccc66c66c66cccccccc.....
            .......cc.cc6c6ccc6cccc.cc......
            ...........cccccccccc...........
            .............feeeeee............
            ............feeeeeefe...........
            .........eeeeefeeeffee..........
            ............ffffeef..ee.........
            ...............fee..............
            ................e...............
            `, SpriteKind.tree))
        tiles.placeOnTile(Tree_list[Tree_list.length - 1], Seed_list[0].tilemapLocation())
        Seed_list.removeAt(0).destroy(effects.spray, 500)
    }
    if (Count == 10) {
        Bossphu = sprites.create(assets.image`myImage`, SpriteKind.Bossphu)
        tiles.placeOnRandomTile(Bossphu, sprites.builtin.forestTiles14)
        Bossphu.setVelocity(randint(-30, -45), randint(-30, -45))
        Bossphu.setBounceOnWall(true)
        SummonBoss = 2
    }
    if (Count >= 30 || Finish == 0) {
        if (Count < 30) {
            Count = 30
        }
        tiles.setCurrentTilemap(tilemap`Final map`)
        if (Count == 30) {
            game.splash("VICTOR")
            game.splash("It's my name")
            game.splash("finally, my memory is back")
            game.splash("READY FOR FINAL BOSS")
            SummonBoss = 0
        }
        if (SummonBoss == 0) {
            mySprite.setPosition(15, 51)
            Boss = sprites.create(assets.image`The eye`, SpriteKind.Boss)
            animation.runImageAnimation(
            Boss,
            assets.animation`Eye Animation`,
            200,
            true
            )
            Bossstatus = statusbars.create(50, 6, StatusBarKind.Health)
            Bossstatus.attachToSprite(Boss)
            Bossstatus.setBarBorder(1, 5)
            Bossstatus.setColor(2, 15)
            Boss.setPosition(142, 64)
            mySprite.setPosition(10, 55)
            Boss.follow(mySprite, 20)
            SummonBoss += 1
            sprites.destroyAllSpritesOfKind(SpriteKind.Food)
            sprites.destroyAllSpritesOfKind(SpriteKind.Place)
            sprites.destroyAllSpritesOfKind(SpriteKind.tree)
            sprites.destroyAllSpritesOfKind(SpriteKind.seed)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.Bossphu)
        }
    } else if (Count % 2 != 0) {
        if (Letter_T == 1) {
            tiles.setCurrentTilemap(tilemap`Days1`)
        } else {
            tiles.setCurrentTilemap(tilemap`Days3`)
        }
        info.changeLifeBy(-1)
    } else {
        if (Letter_T == 1) {
            tiles.setCurrentTilemap(tilemap`Nights`)
        } else {
            tiles.setCurrentTilemap(tilemap`Nights1`)
        }
        if (Letter_I == 0) {
            tiles.placeOnRandomTile(sprites.create(assets.image`I`, SpriteKind.Letter), sprites.dungeon.collectibleInsignia)
            Letter_I += 1
        }
        info.changeScoreBy(2)
        for (let index = 0; index < 2 + randint(0, 4); index++) {
            Ghost = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(Ghost, sprites.builtin.forestTiles14)
            Ghost.setVelocity(randint(-50, 50), randint(-50, 50))
            Ghost.setBounceOnWall(true)
        }
        for (let index = 0; index < 4; index++) {
            Ghost = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(Ghost, sprites.builtin.forestTiles14)
            Ghost.follow(mySprite, randint(30, 60))
            Ghost.setBounceOnWall(true)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(sprites.builtin.forestTiles0)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(sprites.castle.rock0)) {
        tiles.setWallAt(value, true)
    }
})
