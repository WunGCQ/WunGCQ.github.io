/**
 * Created by wungcq on 15/2/18.
 */
function setRouteController(){
    jRouter().setRouter(
        {
            name:'problem',
            type:'get',
            url:'/problem/',
            fun:[
                function(){
                    var isGoToProblem= confirm('您确定要前往题目页吗');
                    if(isGoToProblem) {
                        jRouter('/problem/').redirect('current');
                    }
                }
            ]
        }

    );
    jRouter().setRouter(
        {
            name:'group',
            type:'get',
            url:'/proup/',
            fun:[
                function(){
                    var isGoToProblem= confirm('您确定要前往小组页吗');
                    if(isGoToProblem) {
                        jRouter('/group/').redirect('current');
                    }
                }
            ]
        }

    );
}