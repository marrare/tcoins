import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function gerar(tabela){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
       {
        text: 'Relatório em PDF',
        fontSize: 15,
        bold:true,
        margin:[15, 20, 0, 45],
        
    }];
    const dados = tabela.map((dado)=>{
        return [
            {text:dado.id, fontSize:10},
            {text:dado.nome, fontSize:10}
        ]
    })
    const details = [
        {
            table:{
                headerRows: 1,
                widths:['12%','88%'],
                body:[
                    [
                        {text:'id', style:'tableHeader', fontSize:12},
                        {text:'Nome', style:'tableHeader', fontSize:12}
                    ],
                    ...dados
                ]
            },
            layout: 'lightHorizontalLines'
        }
    ];
    const rodape = [];

    const docDefinition = {
        pageSize: 'A4',
        pageMargins: [15, 50,15,40],

        header: [reportTitle],
        content: [details],
        footer: [rodape]
    }
    pdfMake.createPdf(docDefinition).open();
}
export default gerar;













































































































































































































































































