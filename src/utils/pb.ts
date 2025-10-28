import PocketBase from 'pocketbase';
type TypedPocketBase = InstanceType<typeof PocketBase>;
var path='';
if(import.meta.env.MODE === 'development')
    path = 'http://localhost:8090'    //localhost = machine de dev
else path = 'http://localhost:8088'   //localhost = machine de déploiement
const pb = new PocketBase(path) as TypedPocketBase;
export default pb;