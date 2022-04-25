<ul>
    @foreach($categories as $category)
    <li>
        {{$category->name}}
        @if($category->child)
        @include('admin.layouts.list-categories' , ['categories' => $category->child])
        @endif
    </li>
    @endforeach
</ul>
{{-- Use categories on Code--}}
{{--@include('admin.layouts.list-categories' ,['categories' => \App\Models\Category::where('parent',0)->get()])--}}
