export function checkCanRemove(p1, p2){
    //  1) 타입 확인 
    //  2) 두번 이하로 꺾는지 확인
    var results = checkTurnCount(p1,p2);
    var path = results[0];
    var canRemove = result[1];
    return [path, canRemove];
}