
from offenerhaushalt.core import freezer, pages

@freezer.register_generator
def page():
	for page in pages:
		yield {'path': page.path}