class Promotion {

    constructor(type, barcodes = []) {
        this.type = type;
        this.barcodes = barcodes;
    }

    static all() {
        return [
            new Promotion('BUY_TWO_GET_ONE_FREE', [
                'ITEM000000',
                'ITEM000001',
                'ITEM000005'
            ])
        ];
    }
}

class Item {

    constructor(barcode, name, unit, price = 0.00) {
        this.barcode = barcode;
        this.name = name;
        this.unit = unit;
        this.price = price;
    }

    static all() {
        return [
            new Item('ITEM000000', '可口可乐', '瓶', 3.00),
            new Item('ITEM000001', '雪碧', '瓶', 3.00),
            new Item('ITEM000002', '苹果', '斤', 5.50),
            new Item('ITEM000003', '荔枝', '斤', 15.00),
            new Item('ITEM000004', '电池', '个', 2.00),
            new Item('ITEM000005', '方便面', '袋', 4.50)
        ];
    }
}
let  inputs = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
];
let allItems = Item.all();
let freeItem = Promotion.all();
inputs = inputs.map((item) => item.split('-')); //拆分成二维数组
let newItems = getNumber(inputs,allItems);
// console.log(newItems);
// console.log(freeItem[0].barcodes);
let finalItems = getFinal(freeItem,newItems);
dateDigitToString = num => num < 10 ? `0${num}` : num;
const currentDate = new Date(),
    year = dateDigitToString(currentDate.getFullYear()),
    month = dateDigitToString(currentDate.getMonth() + 1),
    date = dateDigitToString(currentDate.getDate()),
    hour = dateDigitToString(currentDate.getHours()),
    minute = dateDigitToString(currentDate.getMinutes()),
    second = dateDigitToString(currentDate.getSeconds()),
    formattedDateString = `${year}年${month}月${date}日 ${hour}:${minute}:${second}`;

let str =
    '***<没钱赚商店>收据***'+'\n'
    +'打印时间：'+formattedDateString+'\n'
    +outPut(finalItems)
    +'----------------------'+'\n'
    +'总计：'+getSum(finalItems)
    +'.00(元)'+'\n'
    +'节省：'+getFree(finalItems)+'(元)'+'\n'
    +'**********************';
console.log(str);
function getNumber(inputs,allItems) {
    //添加count属性
    allItems.map((item) => item.count = 0);
    // console.log(inputs);
    //计算inputs中对应所有商品个数
    inputs.map((item) => {
        allItems.map((x) => {
            if(item.length === 1&&item[0] === x.barcode){
                x.count+=1;
            }
            if(item.length === 2&&item[0] === x.barcode){
                x.count+=parseInt(item[1]);
            }
        })
    });

    //返回inputs中有的商品信息
    return allItems.filter((item) => item.count!==0);

}
function getFinal(freeItem,newItems){
    allItems.map((item) => item.freePrice = 0);
    allItems.map((item) => item.sumPrice = 0);
    newItems.map((item) => {
        freeItem[0].barcodes.map((x) => {
            if(item.barcode === x && item.count > 2) {

                let freeCount = item.count-1;
                item.freePrice =  item.price;
                item.sumPrice = freeCount*item.price;
            }
        })
    });
    newItems.map((item) => {if(item.sumPrice === 0){item.sumPrice = item.price*item.count}})
    newItems.map((item) => {

        item.sumPrice = item.sumPrice.toString().split(".");

        if(item.sumPrice.length === 1){
            item.sumPrice=item.sumPrice.toString()+".00";
        }else {item.sumPrice=item.sumPrice.toString()+"0";}
    });

    newItems.map((item) => {

        item.price = item.price.toString().split(".");

        if(item.price.length === 1){
            item.price=item.price.toString()+".00";
        }else {item.price=item.price.join('.')+"0";}
    });
    // console.log(newItems);
    return newItems;
}
function getSum(finalItems) {
    let sum = 0;

    finalItems.map((item) => sum+=parseFloat(item.sumPrice));
    return sum;
}
function getFree(finalItems) {
    let sum = 0;
    finalItems.map((item) => sum+=item.freePrice);
    sum = sum.toString().split('.');
    if(sum.length=== 1){
        sum=sum.toString()+".00";
    }else {sum=sum.join('.')+"0";}
    return sum;
}
function outPut(finalItems) {
    let str = '';
    finalItems.map((item) => {
        str +='名称：'+item.name
            +'，数量：'+item.count+item.unit
            +'，单价：'+item.price+'(元)，小计：'
            + item.sumPrice+'(元)'+'\n';
    });
    return str;
}
