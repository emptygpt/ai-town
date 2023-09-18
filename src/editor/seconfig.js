export const DEFAULTTILESETPATH = "./spritesheets/women.png";
export const DEFAULTILEDIMX = 32; // px
export const DEFAULTILEDIMY = 34; // px

//export const DEFAULTTILESETPATH = "./spritesheets/doll.png";
//export const DEFAULTILEDIMX = 48; // px
//export const DEFAULTILEDIMY = 48; // px

// export const DEFAULTTILESETPATH = "./spritesheets/peeps.png";
// export const DEFAULTILEDIMX = 48; // px
// export const DEFAULTILEDIMY = 96; // px

// export const DEFAULTTILESETPATH = "./spritesheets/tall.png";
// export const DEFAULTILEDIMX = 48; // px
// export const DEFAULTILEDIMY = 80; // px

//export const DEFAULTTILESETPATH = "./tree.jpg";
//export const DEFAULTTILESETPATH = "./dude.png";
//export const DEFAULTTILESETPATH = "./spiderman.png";
// export const DEFAULTTILESETPATH = "./strange.png";
//export const DEFAULTTILESETPATH = "./skeleton.png";
//export const DEFAULTTILESETPATH = "./link.png";
//export const DEFAULTTILESETPATH = "./ps-sprite.png";
//export const DEFAULTTILESETPATH = "./knuckles.png";

export const tilesetpadding = 0; 


export const levelwidth  = 1024; // px
export const levelheight = 768; // px

export let leveltilewidth  = Math.floor(levelwidth / DEFAULTILEDIMX);
export let leveltileheight = Math.floor(levelheight / DEFAULTILEDIMX);

export const MAXTILEINDEX = leveltilewidth * leveltileheight;


// -- HTML

export const htmlLayerPaneW = 800;
export const htmlLayerPaneH = 600;

export const htmlTilesetPaneW = 1600;
export const htmlTilesetPaneH = 1600;

export const htmlCompositePaneW = 800;
export const htmlCompositePaneH = 600;

// --  zIndex

// 1-10 taken by layers
export const zIndexFilter           =  20;
export const zIndexMouseShadow      =  30;
export const zIndexGrid             =  50;
export const zIndexCompositePointer =  100;
