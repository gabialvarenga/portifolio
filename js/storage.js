const storageService = (function(){
  const memory = new Map();
  let backendAvailable = typeof window !== 'undefined' && !!window.storage;

  function hasBackend(){
    return typeof window !== 'undefined' && !!window.storage;
  }

  async function get(key, isPublic){
    if(hasBackend()){
      try{
        const r = await window.storage.get(key, !!isPublic);
        return (r && 'value' in r) ? r.value : null;
      }catch(e){ backendAvailable = false; }
    }
    return memory.has(key) ? memory.get(key) : null;
  }

  async function set(key, value, isPublic){
    if(hasBackend()){
      try{
        await window.storage.set(key, value, !!isPublic);
        return;
      }catch(e){ backendAvailable = false; }
    }
    memory.set(key, value);
  }

  async function list(prefix, isPublic){
    if(hasBackend()){
      try{
        const r = await window.storage.list(prefix, !!isPublic);
        return (r && r.keys) || [];
      }catch(e){ backendAvailable = false; }
    }
    return Array.from(memory.keys()).filter(k => k.startsWith(prefix));
  }

  function isBackendAvailable(){
    return backendAvailable;
  }

  return { get, set, list, isBackendAvailable };
})();
