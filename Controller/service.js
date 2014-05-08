function loadFactory(){
    loadModel();
    app.factory("persistProduct", function(){
                
        return {
            add : function(item){
                if(item !== undefined){
                    var p = new Product();
                    p.Name = item.Name;
                    p.Identification = item.Identification;
                    p.Description = item.Description;
                    p.Lapsing = item.Lapsing;
                    
                    persistence.add(p);
                    persistence.flush();
                }
            },
            list : function(controller){                
                Product.all().list(function(items){
                    var itemCount = items.length;
                    var products = [];
                    items.forEach(function(item){
                        products.push({
                            Name: item.Name,
                            Identification: item.Identification,
                            Description : item.Description,
                            Lapsing : item.Lapsing
                        });
                        if(--itemCount == 0){
                            controller.products = products;
                            controller.Refresh();
                        }
                    });
                });
            }
        };
    });
}

