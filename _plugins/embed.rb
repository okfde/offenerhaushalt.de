require 'cgi'

# based on saclark/jekyll-multipost
# https://github.com/saclark/jekyll-multipost (MIT)
module Jekyll
  module PermalinkBuilder
    extend self

    def get_adjusted_permalink(resource, layout)
      layout_path = CGI.escape(layout)
      url = resource.url
      ext = File.extname(url)

      if url.include?(':layout')
        return url.gsub(/:layout/, layout_path)
      end

      # PATCH(offenerhaushalt): budget layout is root
      return url if layout_path == 'budget2'

      if ext.empty?
        "#{url}/#{layout_path}/"
      else
        url.gsub(/\/$|#{ext}$/) { |url_end| "/#{layout_path}#{url_end}" }
      end
    end
  end

  class CollectionLayoutsGenerator
    LAYOUTS = ['budget2', 'embed']

    def generate(site)
      site.collections.each do |_, collection|
        docs = collection.docs.map! do |doc|
          if doc.data["layout"] == 'budget'
            create_layout_views(site, collection, doc)
          else
            doc
          end
        end

        docs.flatten!
      end
    end

    private

    def create_layout_views(site, collection, doc)
      LAYOUTS.map do |layout|
        Document.new(doc.path, :site => site, :collection => collection).tap do |new_doc|
          new_doc.read
          new_doc.data["layout"] = layout
          new_doc.data["permalink"] = PermalinkBuilder.get_adjusted_permalink(doc, layout)
        end
      end
    end
  end

  class MultiPostGenerator < Generator
    safe true

    def generate(site)
      CollectionLayoutsGenerator.new.generate(site)
    end
  end
end
