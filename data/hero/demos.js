const data = [
  {   
    title: 'Magnet Effect 1',
    path: 'magnet_effect_1' 
  },
  {   
    title: 'Busy Street (Timeline Animation)',
    path: 'timeline_busy_street' 
  },
  {   
    title: 'Walking Character (Sprite Sheet)',
    path: 'spritesheet-walking' 
  },
  {   
    title: 'Explainer Animation (Sequence)',
    path: 'explainer_living_prototypes' 
  },
  {   
    title: 'Booth (Rich Content)',
    path: 'rich_content_booth' 
  },
  {   
    title: 'More coming soon...',
    path: 'dummy',
    special: 'no-pointer-events' 
  },
].map(item => { 
  if (!item.slug) item.slug = item.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')
  return item;
});


export default class {
  static getData() {
    return data
  }
  static getBySlug(slug) {
    return data.find(item => item.slug === slug)
  }
  static getNeighbours() {
    
  }
}