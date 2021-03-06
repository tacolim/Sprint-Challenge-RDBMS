const db = require('../configuration/db.js');

module.exports = {
  get: function(id) {
      let query = db('actions');
      if (id) {
        query.where('id', id);
      }

    const promises = [query, this.getActionContexts(id)]; // [ actions, contexts ]  
    
    return Promise.all(promises).then(function(results) {
      let [actions, contexts] = results;
      let action = actions[0];
      action.contexts = contexts.map(c => c.context);  
      
      return project;
    });
  },

  getActionContexts: function(actionId) {
    return db('contexts as c')
      .join('actioncontexts as ac', 'c.id', 'ac.contextId')
      .select('c.context')
      .where('ac.actionId', actionId)
      .then();
  },
};