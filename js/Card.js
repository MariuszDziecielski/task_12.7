function Card(id, name) {
    var self = this;
	this.id = id;
    this.name = name;
	this.element = createCard();
	function createCard(card) {
        var cardDeleteBtn = $('<button class="btn-delete" title="Usuń kartę z tablicy!"></button>'),
            cardDescription = $('<p class="card-description"></p>');
        card = $('<li class="card" title="Przenieś kartę w inne miejsce!"></li>');
		cardDeleteBtn.click(function () {
            self.removeCard();
		});
		card.append(cardDeleteBtn);
		cardDescription.text(self.name);
		card.append(cardDescription);
		return card;
	}
}
Card.prototype = {
	removeCard: function () {
        var self = this;
        $.ajax({
            url: baseUrl + '/card/' + self.id,
            method: 'DELETE',
            success: function () {
                self.element.remove();
            }
        });
    }
};